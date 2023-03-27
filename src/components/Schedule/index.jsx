import React, { useState } from "react";
import ScheduleItem from "./ScheduleItem";
import './Schedule.scss'

function CheduleTabs() {

	const [activeItem, setActiveItem] = useState(1)

	const ScheduleTitle = [
		{
			id: 1,
			day: "Monday",
			date: "May 15, 2023"
		},
		{
			id: 2,
			day: "Tuesday",
			date: "May 16, 2023"
		},
		{
			id: 3,
			day: "Wednesday",
			date: "May 17, 2023"
		}
	]

	console.log(activeItem)

	return (
		<div className="schedule" >
			<div className="schedule__title">
				<h4>Our Timetable</h4>
				<h2>Schedule plan</h2>
			</div>
			<div className="schedule__nav">
				<ul>
					{ScheduleTitle.map(item => (
						<li
							key={item.id}
							onClick={() => setActiveItem(item.id)}
							className={`schedule__nav-item ${activeItem !== item.id ? "" : "active"}`}
						>
							<span>{item.day}</span>
							<p>{item.date}</p>
						</li>
					))}
				</ul>
			</div>
			{activeItem === 1 &&
				<div className="schedule__list">
					<ScheduleItem
						image='schedule-1.jpg'
						theme='Dealing with Difficult People'
						author='Gary Armstrong'
						date='15 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-2.jpg'
						theme='Crop Insurance Conference'
						author='Amanda Hudson'
						date='15-16 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-3.jpg'
						theme='Capdm Executive Conference'
						author='Martha Burke'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-4.jpg'
						theme='Street Food Convention'
						author='Jeffrey Morales'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
				</div>
			}

			{activeItem === 2 &&
				<div className="schedule__list">
					<ScheduleItem
						image='schedule-2.jpg'
						theme='Crop Insurance Conference'
						author='Amanda Hudson'
						date='15-16 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-3.jpg'
						theme='Capdm Executive Conference'
						author='Martha Burke'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-4.jpg'
						theme='Street Food Convention'
						author='Jeffrey Morales'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
				</div>
			}

			{activeItem === 3 &&
				<div className="schedule__list">
					<ScheduleItem
						image='schedule-3.jpg'
						theme='Capdm Executive Conference'
						author='Martha Burke'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
					<ScheduleItem
						image='schedule-4.jpg'
						theme='Street Food Convention'
						author='Jeffrey Morales'
						date='15-17 May, 2023'
						place='Mountain Resort, Phoenix, USA'
					/>
				</div>
			}

			<div className="schedule__download-btn">
				<a href="/">Download schedule (PDF)</a>
			</div>
		</div>
	)
}

export default CheduleTabs;
