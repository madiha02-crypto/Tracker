
import { useState, useEffect } from "react";

function Assignments() {

    const [assignments, setAssignments] = useState([]);

    function getAssignments() {
        fetch("http://127.0.0.1:8000/assignments")
            .then(response => response.json())
            .then(data => {
                setAssignments(data);
            });
    }

    useEffect(() => {
        getAssignments();
    }, []);

    return (
        <div>
            <h2>Assignment Tracker</h2>

            <h3>All Assignments</h3>

            {assignments.map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>

                    <p>Course: {item.course}</p>

                    <p>Maximum Marks: {item.max_marks}</p>

                    <p>Due Date: {item.due_at}</p>

                    <p>Late Until: {item.late_until}</p>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Assignments;
