const form = document.getElementById('roiForm');
        const result = document.getElementById('result');
        const feedback = document.getElementById('feedback');
        let chart;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const investment = parseFloat(document.getElementById('investment').value);
            const revenue = parseFloat(document.getElementById('revenue').value);
            const expenses = parseFloat(document.getElementById('expenses').value);
            const years = parseInt(document.getElementById('years').value);
            
            const annualProfit = revenue - expenses;
            const totalProfit = annualProfit * years;
            const roi = ((totalProfit - investment) / investment) * 100;
            
            const labels = Array.from({length: years}, (_, i) => `Year ${i + 1}`);
            const data = Array.from({length: years}, () => annualProfit);
            
            if (chart) {
                chart.destroy();
            }
            
            chart = new Chart(document.getElementById('roiChart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Annual Profit',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Profit ($)'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Annual Profit Over Time'
                        }
                    }
                }
            });
            
            let feedbackText = `Your ROI over ${years} years is ${roi.toFixed(2)}%. `;
            if (roi > 50) {
                feedbackText += "This is an excellent return on investment!";
            } else if (roi > 20) {
                feedbackText += "This is a good return on investment.";
            } else if (roi > 0) {
                feedbackText += "This investment is profitable, but you might want to explore ways to increase your ROI.";
            } else {
                feedbackText += "This investment is not profitable. Consider revising your strategy or exploring other opportunities.";
            }
            
            feedback.textContent = feedbackText;
            result.style.display = 'block';
        });