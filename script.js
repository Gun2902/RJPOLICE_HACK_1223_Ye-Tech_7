const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})
//adding 
// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch data for the money flow chart (replace this with your actual data)
    const moneyFlowData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Money Flow",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                data: [1000, 1200, 800, 1500, 2000, 1800], // Replace with your actual data
            },
        ],
    };

    // Get the canvas element
    const moneyFlowCanvas = document.getElementById("moneyFlowChart");

    // Create the money flow chart
    const moneyFlowChart = new Chart(moneyFlowCanvas, {
        type: "bar", // You can choose the chart type (bar, line, etc.)
        data: moneyFlowData,
        options: {
            responsive: true,
            scales: {
                x: {
                    type: "category",
                    labels: moneyFlowData.labels,
                },
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

