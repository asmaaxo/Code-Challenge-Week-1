// Car speed chccker
function checkSpeed(speed) {
    const speedLimit = 70; // Define the speed limit
    let demeritPoints = 0; // Initialize demerit points

    // Check if the speed is less than the speed limit
    if (speed <= speedLimit) {
        console.log("Ok"); // Print "Ok" if speed is less than 70
    } else {
        // Calculate demerit points for each 5 km/h over the speed limit
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`); // Print the total number of demerit points

        // Check if demerit points exceed 12
        if (demeritPoints > 12) {
            console.log("License suspended"); // Print if license is suspended
        }
    }
}
// Input car speed
let carSpeed = 69; 
checkSpeed(carSpeed); // Function called

