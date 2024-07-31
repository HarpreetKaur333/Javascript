const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
let selectedDate = null;
let currentDate = new Date();

function renderCalendar(date) {
    calendarBody.innerHTML = '';
    monthYear.textContent = date.toLocaleDateString('default', { month: 'long', year: 'numeric' });
    
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (const day of dayHeaders) {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header');
        dayHeader.textContent = day;
        calendarBody.appendChild(dayHeader);
    }
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarBody.appendChild(emptyCell);
    }
    
    for (let i = 1; i <= lastDate; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = i;
        dayCell.onclick = () => selectDate(dayCell);
        if (selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear()) {
            dayCell.classList.add('selected');
        }
        calendarBody.appendChild(dayCell);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

function selectDate(dayCell) {
    const day = parseInt(dayCell.textContent);
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    renderCalendar(currentDate);
}

renderCalendar(currentDate);
