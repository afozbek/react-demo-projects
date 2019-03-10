import React, { Component } from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';
export default class Table extends Component {
    render() {
        const { friendsData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody friendsData={friendsData} />
            </table>
        );
    }
}
