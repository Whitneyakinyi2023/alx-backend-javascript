interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const studentA: Student = {
    firstName: "Whitney",
    lastName: "Ologi",
    age: 25,
    location: "Nairobi"
};

const studentB: Student = {
    firstName: "Chad",
    lastName: "Ologi",
    age: 7,
    location: "Nairobi"
};

// Create an array containing the students
const studentsList: Student[] = [studentA, studentB];

// Function to render the table
function renderTable(students: Student[]) {
    // Get the container where the table will be appended
    const container = document.getElementById('table-container');

    if (container) {
        // Create a table element
        const table = document.createElement('table');

        // Create the header row
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        // Define the headers
        const headers = ['First Name', 'Location'];

        // Create and append header cells
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the body of the table
        const tbody = document.createElement('tbody');

        // Iterate over the students array and create rows
        students.forEach(student => {
            const row = document.createElement('tr');

            // Create cells for firstName and location
            const firstNameCell = document.createElement('td');
            firstNameCell.textContent = student.firstName;
            row.appendChild(firstNameCell);

            const locationCell = document.createElement('td');
            locationCell.textContent = student.location;
            row.appendChild(locationCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        container.appendChild(table);
    }
}

// Call the function to render the table with studentsList data
renderTable(studentsList);
