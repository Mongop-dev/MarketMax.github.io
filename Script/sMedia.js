// Tab Functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Growth Chart
const growthCtx = document.getElementById('growthChart').getContext('2d');
new Chart(growthCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Facebook',
            data: [23.5, 24.2, 25.1, 26.3, 27.2, 28.5],
            borderColor: '#4267B2',
            tension: 0.4
        }, {
            label: 'Twitter',
            data: [18.2, 19.1, 19.8, 20.5, 21.2, 22.1],
            borderColor: '#1DA1F2',
            tension: 0.4
        }, {
            label: 'Instagram',
            data: [45.8, 47.2, 48.9, 50.3, 52.1, 54.0],
            borderColor: '#E1306C',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Follower Growth Trends'
            }
        }
    }
});

// Analytics Chart
const analyticsCtx = document.getElementById('analyticsChart').getContext('2d');
new Chart(analyticsCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Post Reach',
            data: [12500, 13200, 15400, 14800, 13900, 11200, 10800],
            backgroundColor: '#1a73e8'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Daily Post Reach'
            }
        }
    }
});

// Engagement Chart
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
new Chart(engagementCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Likes',
            data: [245, 285, 375, 340, 290],
            backgroundColor: '#4CAF50'
        }, {
            label: 'Comments',
            data: [120, 150, 180, 165, 140],
            backgroundColor: '#2196F3'
        }, {
            label: 'Shares',
            data: [65, 85, 95, 75, 80],
            backgroundColor: '#FF9800'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Engagement Metrics'
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});