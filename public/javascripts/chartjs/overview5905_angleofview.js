var ctx = document.getElementById('angleofview5905');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-5905 HD', 'IN-6014 HD', 'IN-3011', 'IN-9008 HD', 'IN-7011 HD', 'IN-5907 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Diagonal Angle [°]',
                data: [90, 90, 45.9, 90, 60, 45],
                backgroundColor: '#373a3c',
              },
							{
                type: 'bar',
                label: 'Horizontal Angle [°]',
                data: [81, 81, 36.8, 81, 54, 37],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            	{
                type: 'bar',
                label: 'Vertical Angle [°]',
                data: [61, 61, 28.4, 61, 41, 28],
                backgroundColor: 'rgba(240, 173, 78, 1)',
              },
        ],
      },
		  options: {
      legend: {
        display: false,
      },
		    scales: {
		      yAxes: [{
		        ticks: {
              max: 100,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
