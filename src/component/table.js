import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/Evelyn-XuX/GoGoGaucho">
                  GoGoGoGaucho
                </a>
              </td>
              <td>
                Developed an Android app using Java that allowed UCSB students
                to check their major and general education progress and manage
                their course schedule.
              </td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                <a href="https://easyfind8.com/">Easyfind Website Redesign</a>
              </td>
              <td>
                Redesigned the whole website to a user friendly and usable
                product and worked with various stakeholders to increase the
                customer convertion rate.
              </td>
              <td>2020</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/csa-tech/front-final">
                  CSA Tech RideShare
                </a>
              </td>
              <td>
                Led and developed a WeChat Applet, mini program regarding
                helping students to find rideshares. Improved development
                efficiency and provided technical assistance and feedback
                reviews.
              </td>
              <td>2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
