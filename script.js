document.getElementById('location-button').addEventListener('click', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  });
  
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    const locationList = document.getElementById('location-list');
  
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  
    // Append the new location to the list
    locationList.appendChild(newItem);
  }
  
  function showError(error) {
    let errorMessage = '';
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        errorMessage = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        errorMessage = 'An unknown error occurred.';
        break;
    }
    alert(errorMessage);
  }