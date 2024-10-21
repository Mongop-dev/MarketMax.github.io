const dashboardData = {
    totalRevenue: 324750,
    revenueChange: 8.5,
    conversionRate: 3.2,
    conversionChange: 0.5,
    avgOrderValue: 78,
    aovChange: 2.1,
    revenueByChannel: {
        labels: ['Direct', 'Organic Search', 'Paid Search', 'Social', 'Email'],
        data: [30, 25, 20, 15, 10]
    },
    salesTrend: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [42000, 44500, 47000, 46500, 48000, 50000, 51750]
    },
    topProducts: [
        {name: 'Premium Widget', sales: 1250},
        {name: 'Eco-Friendly Gadget', sales: 980},
        {name: 'Smart Home Hub', sales: 875},
        {name: 'Fitness Tracker', sales: 720},
        {name: 'Wireless Earbuds', sales: 650}
    ]
};

// Chart instances
let revenueByChannelChart, salesTrendChart;

// Update metrics
function updateMetrics() {
    document.getElementById('totalRevenue').textContent = dashboardData.totalRevenue.toLocaleString();
    document.getElementById('revenueChange').textContent = dashboardData.revenueChange;
    document.getElementById('conversionRate').textContent = dashboardData.conversionRate;
    document.getElementById('conversionChange').textContent = dashboardData.conversionChange;
    document.getElementById('avgOrderValue').textContent = dashboardData.avgOrderValue;
    document.getElementById('aovChange').textContent = dashboardData.aovChange;

    // Set color for change metrics
    document.querySelectorAll('.metric-change').forEach(el => {
        const value = parseFloat(el.textContent);
        el.classList.toggle('negative', value < 0);
        el.textContent = (value >= 0 ? '+' : '') + value + '%';
    });
}

// Create Revenue by Channel chart
function createRevenueByChannelChart() {
    const ctx = document.getElementById('revenueByChannel').getContext('2d');
    if (revenueByChannelChart) {
        revenueByChannelChart.destroy();
    }
    revenueByChannelChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: dashboardData.revenueByChannel.labels,
            datasets: [{
                data: dashboardData.revenueByChannel.data,
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 10
                        }
                    }
                },
                title: {
                    display: false
                }
            }
        }
    });
}

// Create Sales Trend chart
function createSalesTrendChart() {
    const ctx = document.getElementById('salesTrend').getContext('2d');
    if (salesTrendChart) {
        salesTrendChart.destroy();
    }
    salesTrendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dashboardData.salesTrend.labels,
            datasets: [{
                label: 'Sales',
                data: dashboardData.salesTrend.data,
                borderColor: '#3498db',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        callback: function(value, index, values) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Update Top Selling Products
function updateTopProducts() {
    const topProductsList = document.getElementById('topProducts');
    topProductsList.innerHTML = '';
    dashboardData.topProducts.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="product-name">${product.name}</span> <span class="product-sales">${product.sales} units</span>`;
        topProductsList.appendChild(li);
    });
}

// Initialize dashboard
function initDashboard() {
    updateMetrics();
    createRevenueByChannelChart();
    createSalesTrendChart();
    updateTopProducts();
}

// Resize charts
function resizeCharts() {
    if (revenueByChannelChart) {
        revenueByChannelChart.resize();
    }
    if (salesTrendChart) {
        salesTrendChart.resize();
    }
}

// Debounce function to limit the rate of function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

document.addEventListener('DOMContentLoaded', initDashboard);
window.addEventListener('resize', debounce(resizeCharts, 250));