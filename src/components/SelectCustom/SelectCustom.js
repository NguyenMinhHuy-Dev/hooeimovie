import { Component } from "react";
import './SelectCustom.css';

class SelectCustom extends Component {
    state = {
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
        const { data, placeholder } = this.props;
        const { defaultType, defaultTitle } = this.state;

        return (
            <div className="option-custom">
                <div className="select-input" onClick={this.handleOpen}>
                    <span className={`${placeholder && defaultTitle==='' ? 'select-title placeholder' : 'select-title'}`}>
                        {defaultTitle === '' ? placeholder : defaultTitle}
                    </span>
                </div>

                <div className={`select-list ${this.state.isOpen ? "open" : ""}`}>
                    {data.map((item) => (
                        <div
                            key={item.mediaType}
                            onClick={() => this.handleSelect(item.mediaType, item.mediaTitle)}    
                            className="select-item"
                        >
                            <span className="select-title">{item.mediaTitle}</span>
                        </div>
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