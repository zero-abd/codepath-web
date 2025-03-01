import React from 'react';
import Event from './Event'

const Calendar = () => {
  return (
    <table>
        <thead>
            <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="time">8 AM</td>
                <Event event='Starbucks ☕️' color ='green'/>
                <td></td>
                <Event event='Starbucks ☕️' color ='green'/>
                <Event event='Starbucks ☕️' color ='green'/>
                <td></td>
                <Event event='Yolk 🍳' color ='green'/>
                <Event event='Subway 🚊' color ='pink'/>
            </tr>
            <tr>
                <td className="time">9 AM</td>
                <td></td>
                <td></td>
                <Event event='Yolk 🍳' color ='green'/>
                <td></td>
                <Event event='Yolk 🍳' color ='green'/>
                <Event event='Subway 🚊' color ='pink'/>
                <td></td>
            </tr>
            <tr>
                <td className="time">10 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='The Bean 🫘' color ='blue'/>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">11 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">12 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">1 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">2 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">3 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">4 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='green' />
                <td></td>
            </tr>
            <tr>
                <td className="time">5 PM</td>
                <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='green' />
                <td></td>
                <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='green' />
                <td></td>
                <td></td>
                <td></td>
                <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='green' />
            </tr>
        </tbody>
    </table>
  )
}

export default Calendar;

