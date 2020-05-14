import React from 'react'
import { AddEmployee } from '../panels'
import EmployeeList from '../components/TeamPayroll/EmployeeList'
import KeyStats from '../components/TeamPayroll/KeyStats'
import SalaryStats from '../components/TeamPayroll/SalaryStats'

function TeamPayroll({ panelState, onAddEmployee, editEquityOptionPanel }) {
  return (
    <div>
      <KeyStats />
      <SalaryStats editEquityOptionPanel={editEquityOptionPanel} />
      <EmployeeList />
      <AddEmployee onAddEmployee={onAddEmployee} panelState={panelState} />
    </div>
  )
}

export default React.memo(TeamPayroll)
