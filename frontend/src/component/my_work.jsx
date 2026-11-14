
import { useState, useEffect } from "react";

function MyWork() {

    const [submissions, setSubmissions] = useState([]);

    function getMyWork() {
        fetch("http://127.0.0.1:8000/students/1/submissions")
            .then(response => response.json())
            .then(data => {
                setSubmissions(data);
            });
    }

    useEffect(() => {
        getMyWork();
    }, []);

    return (
        <div>
            <h2>My Work</h2>

            {submissions.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>

                    <p>Marks: {item.marks}</p>

                    <p>Feedback: {item.feedback}</p>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default MyWork;
