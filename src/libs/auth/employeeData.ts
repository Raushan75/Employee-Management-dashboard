import type { Employee } from "../types/employee"

const KEY ='employees'

export const getEmployees = ():Employee[]=>{
    return JSON.parse(localStorage.getItem(KEY) || '[]')
}

export const saveEmployees = (data:Employee[])=>{
    localStorage.setItem(KEY, JSON.stringify(data))
}