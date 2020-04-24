import React from 'react'
import { Card, CardContent,CardHeader } from '@material-ui/core';

import filterData from './filter-data.json'
import useStyles from './Styles'
import Filter from './Filter';

import filterSections from './filter-data1.json'

function FilterComponent() {
    const classes = useStyles();
    const [request, setRequest] = React.useState({
        experience: [],
        location: [],
        ctc: [],
        tags: [],
    })

    const onChangeHandler = (event) => {
        event.target.checked && setRequest({
            ...request,
            [event.target.name]: [...request[event.target.name], event.target.value]
        })
        !event.target.checked && setRequest(request => {
            const values = { ...request }
            values[event.target.name].indexOf(event.target.value) > -1 && values[event.target.name].splice(values[event.target.name].indexOf(event.target.value), 1)
            return {
                ...values
            }
        })
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader title={"Filters"} className={classes.cardHeader} />
                <CardContent>
                    {/* <Filter data={filterData.Experience} changeHandler={onChangeHandler} />
                    <Filter data={filterData.Location} changeHandler={onChangeHandler} />
                    <Filter data={filterData.CTC} />
                    <Filter data={filterData.Tags} changeHandler={onChangeHandler} /> */}
                    {
                        filterSections && filterSections.map((section,index) =>(
                            <Filter key={index} data={section} changeHandler={onChangeHandler} />
                        ))
                    }
                </CardContent>
            </Card>
        </div>
    )
}

export default FilterComponent
