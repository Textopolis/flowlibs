import { Component } from 'react';
import dynamic from "next/dynamic";
import React from 'react'


// const DiagramMaker = dynamic(
//     () => import('diagram-maker')
//         .then((module) => {
//             console.log('DYNAMIC LOAD');
//             console.info('widget' , module);
//             return module.DiagramMaker
//         }),
//     { ssr: false }
// )

export default class Diagram extends React.Component {

    componentDidMount = async () => {
        const DiagramMaker = (await import('diagram-maker')).DiagramMaker
        this.diagramMaker = new DiagramMaker(
            this.container,
            this.props.config,
            // { initialData, eventListener, consumerRootReducer, consumerEnhancer }
            {
                initialData: this.props.initialData
            }
        );
    }

    componentWillUnmount() {
        //this.diagramMaker.destroy();
    }

    render () {
        return (
            <div ref={(element) => this.container = element}/>
        )
    }
}