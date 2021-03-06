// Alert Banner

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
`<div class="alert-banner">
    <p class="alert-text"><strong>Alert: </strong>You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});


// Line Graph with Clickable Link Variables

const trafficCanvas = document.getElementById('trafficChart');

let hourlyIcon = document.getElementById('hourlyLink');
let dailyIcon = document.querySelector('#dailyLink');
let weeklyIcon = document.getElementById('weeklyLink');
let monthlyIcon = document.getElementById('monthlyLink');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
 
// Event Listeners for Nav Links

hourlyIcon.addEventListener('click', function(event) {
    event.preventDefault();
    dailyIcon.classList.remove('active');
    hourlyIcon.classList.add('active');
    weeklyIcon.classList.remove('active');
    monthlyIcon.classList.remove('active');
    trafficChart.data.datasets[0].data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
    trafficChart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"]
    trafficChart.update();
});

dailyIcon.addEventListener('click', function(event) {
    event.preventDefault();
    dailyIcon.classList.add('active');
    hourlyIcon.classList.remove('active');
    weeklyIcon.classList.remove('active');
    monthlyIcon.classList.remove('active');
    trafficChart.data.datasets[0].data = [0, 150, 1300, 900, 300, 230, 900];
    trafficChart.data.labels = ["7-8", "8-9", "9-10", "10-11", "11-12", "1-2", "2-3"]
    trafficChart.update();
});

weeklyIcon.addEventListener('click', function(event) {
    event.preventDefault();
    dailyIcon.classList.remove('active');
    hourlyIcon.classList.remove('active');
    weeklyIcon.classList.add('active');
    monthlyIcon.classList.remove('active');
    trafficChart.data.datasets[0].data = [1000, 200, 430, 200, 1000, 1500, 2200];
    trafficChart.data.labels = ["Week 8", "Week 9", "Week 10", "Week 11", "Week 12", "Week 13", "Week 14"]
    trafficChart.update();
});

monthlyIcon.addEventListener('click', function(event) {
    event.preventDefault();
    dailyIcon.classList.remove('active');
    hourlyIcon.classList.remove('active');
    weeklyIcon.classList.remove('active');
    monthlyIcon.classList.add('active');
    trafficChart.data.datasets[0].data = [600, 780, 1300, 1200, 1900, 1000, 1400];
    trafficChart.data.labels = ["Jan", "Feb", "March", "April", "May", "June", "July"]
    trafficChart.update();
});

// Bar Graph 

const dailyCanvas = document.getElementById('dailyChart');

let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

let dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Doughnut Chart

const mobileCanvas = document.getElementById('mobileRoundChart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            lebels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message Section & Listener

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if(user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out the message field before sending");
    } else {
        alert(`Message succesfully sent to: ${user.value}`)
    }
});

//Header Alert Notifications and Dropdown Menu

let bellNotification = document.querySelector('.bell');
let dropdown = document.querySelector('.dropdown-content');

bellNotification.addEventListener('click', function() {
    dropdown.style.display = 'flex';
});

window.addEventListener('mouseup', function(event) {
    let DropdownClose = document.querySelector('.dropdown-content');
    if(event.target != DropdownClose) {
      DropdownClose.style.display = "none";
    }
});

// Local Storage- Save

let togglebtn1 = document.getElementById('tog1');
let togglebtn2 = document.getElementById('tog2');
let timezone = document.getElementById('timezone');
let settings = document.getElementById('settings');

function saveSelected() {
    localStorage.setItem('tog1', togglebtn1.checked);
    localStorage.setItem('tog2', togglebtn2.checked);
    localStorage.setItem('timezone', timezone.selectedIndex);
};

// Save & Cancel Listener

settings.addEventListener('click', e => {
    if (e.target.id === 'save') {
        saveSelected();
    } else if (e.target.id === 'cancel') {
        localStorage.clear();
        togglebtn1.checked = false;
        togglebtn2.checked = false;
        timezone.selectedIndex = [0];
    }
});

//Reloading Selected Settings

function loadSelected() {
    let checked1 = JSON.parse(localStorage.getItem('tog1'));
    let checked2 = JSON.parse(localStorage.getItem('tog2'));
    let getTimezone = JSON.parse(localStorage.getItem('timezone'));
    if (checked1) {
        togglebtn1.checked = checked1;
    } if (checked2) {
        togglebtn2.checked = checked2;
    } if (getTimezone) {
        timezone.selectedIndex = getTimezone;
    }
}

loadSelected();