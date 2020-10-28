import React from 'react';
import Tab from './tab';

export default function Tabs(props) {
    const [currentPage, setCurrentPage] = React.useState(props.defaultTab);

    let error = null;
    React.Children.forEach(props.children, co => {
        if (co.type !== Tab) {
            error = new Error('All children must be an instance of Tab.');
        }
    });
    if (error !== null) {
        throw error;
    }

    return (
        <div>
            <div className="scrollmenu py-3">
                {
                    React.Children.map(props.children, co => {
                        if (currentPage === co.props.name) {
                            return (
                                <div className="isactive scrollmenu-item ml-2"
                                    style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                    {co.props.label}
                                </div>
                            );
                        }

                        return (
                            <div className="scrollmenu-item"
                                onClick={() => setCurrentPage(co.props.name)}
                                style={{ fontSize: '1.3rem' }}>
                                {co.props.label}
                            </div>
                        );
                    })
                }
            </div>
            <div>
                {
                    React.Children.map(props.children, co => {
                        return React.cloneElement(co, { visible: currentPage === co.props.name });
                    })
                }
            </div>
        </div>
    );
}