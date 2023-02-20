import React, { Component } from "react";
import classNames from "classnames";
// import { Route, Routes } from 'react-router-dom';
import ScheduleItem from "./ScheduleItem";
import './Schedule.scss'

class CheduleTabs extends Component {

	state = {
		activeItem: 1,
	}

	handleItem = (e) => {
		this.setState({
			activeItem: +e.target.getAttribute('data-name')
		})
	}

	render() {
		const { activeItem } = this.state;
		return (
			<div className="schedule" >
				<div className="schedule__title">
					<h4>Our Timetable</h4>
					<h2>Schedule plan</h2>
				</div>
				<div className="schedule__nav">
					<ul>
						<li
							data-name={1}
							onClick={this.handleItem}
							className={classNames('schedule__nav-item', { active: this.state.activeItem === 1 })}
						>
							<span>Monday</span>
							<p>May 15, 2023</p>
						</li>

						<li
							data-name={2}
							onClick={this.handleItem}
							className={classNames('schedule__nav-item', { active: this.state.activeItem === 2 })}
						>
							<span>Tuesday</span>
							<p>May 16, 2023</p>
						</li>

						<li
							data-name={3}
							onClick={this.handleItem}
							className={classNames('schedule__nav-item', { active: this.state.activeItem === 3 })}
						>
							<span>Wednesday</span>
							<p>May 17, 2023</p>
						</li>
					</ul>
				</div>
				{ activeItem === 1 && 
					<div className="schedule__list">
						<ScheduleItem 
							image = 'schedule-1.jpg'
							theme = 'Dealing with Difficult People'
							author = 'Gary Armstrong'
							date = '15 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-2.jpg'
							theme = 'Crop Insurance Conference'
							author = 'Amanda Hudson'
							date = '15-16 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-3.jpg'
							theme = 'Capdm Executive Conference'
							author = 'Martha Burke'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-4.jpg'
							theme = 'Street Food Convention'
							author = 'Jeffrey Morales'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
					</div>
				} 

				{ activeItem === 2 && 
					<div className="schedule__list">
						<ScheduleItem 
							image = 'schedule-2.jpg'
							theme = 'Crop Insurance Conference'
							author = 'Amanda Hudson'
							date = '15-16 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-3.jpg'
							theme = 'Capdm Executive Conference'
							author = 'Martha Burke'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-4.jpg'
							theme = 'Street Food Convention'
							author = 'Jeffrey Morales'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
					</div>
				} 

				{ activeItem === 3 && 
					<div className="schedule__list">
						<ScheduleItem 
							image = 'schedule-3.jpg'
							theme = 'Capdm Executive Conference'
							author = 'Martha Burke'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
						<ScheduleItem 
							image = 'schedule-4.jpg'
							theme = 'Street Food Convention'
							author = 'Jeffrey Morales'
							date = '15-17 May, 2023'
							place = 'Mountain Resort, Phoenix, USA'
						/>
					</div>
				} 

				<div className="schedule__download-btn">
					<a href="/">Download schedule (PDF)</a>
				</div>
			</div>
		)
	}

}

export default CheduleTabs;
