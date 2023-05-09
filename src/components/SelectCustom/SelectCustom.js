import { Component } from "react";
import './SelectCustom.css';
import { Link, NavLink } from "react-router-dom";

class SelectCustom extends Component {
    state = {
        // selectTitle: '',
        defaultType: '',
        defaultTitle: '',
        isOpen: false
    };

    handleSelect = (mediaType, mediaTitle) => {
        if (!this.state.isOpen) {
            document.addEventListener('click', this.handleOutsideClick, false);
        }
        else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            defaultType: mediaType,
            defaultTitle: mediaTitle,
        }));
    };
    
    handleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    handleOutsideClick = () => {
        this.handleSelect();
    };

    render() {
        const { id, data, placeholder, selectTitle } = this.props;
        const { defaultType, defaultTitle } = this.state;

        return (
            <div className="option-custom">
                <div id={id} className="select-input" onClick={this.handleOpen}>
                    <span  className={`${placeholder && defaultTitle==='' ? 'select-value placeholder' : 'select-value'}`}>
                        {defaultTitle === '' ? placeholder : defaultTitle}
                    </span>
                </div>

                <div className={`select-list ${this.state.isOpen ? "open" : ""}`}>
                    <div className="select-item">
                        <span className="select-title-default">{selectTitle}</span>
                    </div>
                    {data.map((item) => (
                        // item.mediaLink ? (
                        //     <NavLink key={item.mediaType} to={item.mediaLink}>
                        //         <div
                        //             key={item.mediaType}
                        //             // onClick={() => this.handleSelect(item.mediaType, item.mediaTitle)}    
                        //             className="select-item"
                        //         > 
                        //             <span className="select-title">{item.mediaTitle}</span> 
                        //         </div>
                        //     </NavLink>
                        // ) : (
                            <div
                                key={item.mediaType}
                                onClick={() => this.handleSelect(item.mediaType, item.mediaTitle)}    
                                className="select-item"
                            > 
                                <span className="select-title">{item.mediaTitle}</span> 
                            </div>
                        // )
                    ))}
                </div>

                {/* {this.state.isOpen ? 
                    <div className="select-list">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => this.handleSelect(data[index].mediaType, data[index].mediaTitle)}    
                                className="select-item"
                            >
                                <span className="select-title">{item.mediaTitle}</span>
                            </div>
                        ))}
                    </div>
                    : ''
                } */}
            </div>
        );
    }
}
export default SelectCustom;