import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VenueSinglePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVenue(data.venue);
        setSchedule(data.schedules[0]);
      });
  }, []);
  console.log(schedule);
  console.log(venue);

  return (
    <>
      <div className="container p-">
        <h1 className="text-center m-4">Mater Dei College {venue.building}</h1>
        ID: {id}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-center m-4">Schedules</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Course No.</th>
              <th scope="col">Description</th>
              <th scope="col">Schedule</th>
              <th scope="col">Size</th>
              <th scope="col">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((sched, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{schedule.id}</td>
                    <td>{schedule.course_no}</td>
                    <td>{schedule.description}</td>
                    <td>{schedule.schedule}</td>
                    <td>{schedule.size}</td>
                    <td>{schedule.teacher}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <Link to="/" className="btn btn-sm btn-primary mb-5">
          back to venues
        </Link>
      </div>
    </>
  );
};

export default VenueSinglePage;
