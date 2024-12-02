import React from 'react'

function AgentTable() {
  return (
    <div>

    <div className="regstrationFormWrapper">
        <h1 className="pageTitle">Agent Data</h1>
        <table className="primaryTable">
          <tbody>
            <tr>
              <th scope="col">Full Name </th>
              <th scope="col">Salary / Incentive</th>
              <th scope="col">Date of Joining</th>
              <th scope="col">Years Served</th>
              <th scope="col">Region/ State / Country</th>
              <th scope="col">Sales Achieved till Date</th>
              <th scope="col">Incentives</th>
              <th scope="col">Salary Withdrawn</th>
          </tr>
          <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni Ramesh Soni </a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            <tr>
              <td data-label="Full Name"><a href="#">Ramesh Soni</a></td>
              <td data-label="Salary / Incentive">Incentive</td>
              <td data-label="Date of Joining">20 Jan 2020</td>
              <td data-label="Years Served">4 years</td>
              <td data-label="Region/ State / Country">Rajkot-Gujrat-India</td>
              <td data-label="Sales Achieved till Date">1800</td>
              <td data-label="Incentives">18</td>
              <td data-label="Salary Withdrawn">50000</td>
            </tr>
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default AgentTable;