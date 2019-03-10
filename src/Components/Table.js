import React, { Component } from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';
export default class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
