import React, { Component } from 'react'
import moment from 'moment'
export default class CountDownn extends Component {
    componentWillMount(){
        this.getDifference()
    }
    getDifference=()=>{
        var now = moment(new Date()); //todays date
        var end = moment("2018-11-9"); // another date
        var duration = moment.duration(now.diff(end));
        var days = duration.asDays();
        console.log(days)
    }
  render() {
    return (
      <div>

      </div>
    )
  }
}
