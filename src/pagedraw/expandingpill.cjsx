# Generated by https://pagedraw.io/pages/8462
React = require 'react'
render = ->
    <div style={{"display": "flex", "flexGrow": "1"}}>
        <style dangerouslySetInnerHTML={__html: """
            @import url('https://fonts.googleapis.com/css?family=Lato:');
            
            * {
                box-sizing: border-box;
            }
            
            body {
                margin: 0;
            }
            
            button:hover {
                cursor: pointer;
            }
            
            a {
                text-decoration: none;
                color: inherit;
            }
            
            .pd-onhover-parent >.pd-onhover {
                display: none;
            }
            
            .pd-onhover-parent:hover > * {
                display: none;
            }
            
            .pd-onhover-parent:hover > .pd-onhover {
                display: flex;
            }
            
            .pd-onactive-parent > .pd-onactive {
                display: none;
            }
            
            .pd-onactive-parent:active > * {
                display: none;
            }
            
            .pd-onactive-parent:active > .pd-onactive {
                display: flex;
            }
            
            .pd-onactive-parent.pd-onhover-parent:active > .pd-onhover {
                display: none;
            }
        """} /> 
        { if ((if this.props.open then 'open' else 'default') == "default")
            <div style={{"display": "flex", "flexDirection": "column", "flexGrow": "1"}}>
                <div style={{"display": "flex"}}>
                    <div onClick={this.props.handleClick} style={{"display": "flex", "flexDirection": "column", "paddingTop": 12, "paddingBottom": 10, "borderRadius": 10, "boxShadow": "0px 5px 15px 0px rgba(0,0,0,0.07), 0px 15px 35px 0px rgba(50,50,93,0.10)", "background": "rgb(51, 51, 96)"}}>
                        <div style={{"display": "flex", "paddingLeft": 15, "paddingRight": 37}}>
                            <div style={{"width": 21, "flexShrink": "0", "fontFamily": "\"Lato\", sans-serif", "color": "rgb(255, 255, 255)", "fontSize": 17, "lineHeight": "26px", "letterSpacing": 0, "fontWeight": "normal", "fontStyle": "normal", "textDecoration": "none", "textAlign": "right", "wordWrap": "break-word"}}>
                                { String(this.props.n) + "." }
                            </div>
                            <div style={{"width": 400, "flexShrink": "0", "marginLeft": 15, "fontFamily": "\"Lato\", sans-serif", "color": "rgb(255, 255, 255)", "fontSize": 17, "lineHeight": "26px", "letterSpacing": 0, "fontWeight": "normal", "fontStyle": "normal", "textDecoration": "none", "textAlign": "left", "wordWrap": "break-word"}}>
                                { this.props.title }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        { if ((if this.props.open then 'open' else 'default') == "open")
            <div style={{"display": "flex", "flexDirection": "column", "flexGrow": "1"}}>
                <div style={{"display": "flex"}}>
                    <div style={{"display": "flex", "flexDirection": "column", "borderRadius": 10, "boxShadow": "0px 5px 15px 0px rgba(0,0,0,0.07), 0px 15px 35px 0px rgba(50,50,93,0.10)", "background": "rgb(255, 255, 255)"}}>
                        <div style={{"display": "flex", "paddingLeft": 15}}>
                            <div style={{"display": "flex", "flexDirection": "column", "paddingTop": 30, "paddingBottom": 90}}>
                                <div style={{"display": "flex"}}>
                                    <div style={{"width": 21, "flexShrink": "0", "fontFamily": "\"Lato\", sans-serif", "color": "rgb(6, 18, 44)", "fontSize": 17, "lineHeight": "26px", "letterSpacing": 0, "fontWeight": "normal", "fontStyle": "normal", "textDecoration": "none", "textAlign": "right", "wordWrap": "break-word"}}>
                                        { String(this.props.n) + "." }
                                    </div>
                                </div>
                            </div>
                            <div style={{"display": "flex", "flexDirection": "column", "marginLeft": 15, "paddingTop": 30, "paddingBottom": 29}}>
                                <div style={{"display": "flex"}}>
                                    <div style={{"width": 400, "flexShrink": "0", "fontFamily": "\"Lato\", sans-serif", "color": "rgb(6, 18, 44)", "fontSize": 17, "lineHeight": "26px", "letterSpacing": 0, "fontWeight": "normal", "fontStyle": "normal", "textDecoration": "none", "textAlign": "left", "wordWrap": "break-word"}}>
                                        { this.props.title }
                                    </div>
                                </div>
                                <div style={{"display": "flex", "marginTop": 9, "paddingRight": 3}}>
                                    <div style={{"width": 397, "flexShrink": "0", "fontFamily": "\"Lato\", sans-serif", "color": "rgb(6, 18, 44)", "fontSize": 17, "lineHeight": "26px", "letterSpacing": 0, "fontWeight": "normal", "fontStyle": "normal", "textDecoration": "none", "textAlign": "left", "wordWrap": "break-word"}}>
                                        { this.props.body }
                                    </div>
                                </div>
                            </div>
                            <div style={{"width": 10, "height": 146, "flexShrink": "0", "marginLeft": 27, "background": "rgb(255, 169, 0)"}} /> 
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>

module.exports = (props) -> render.apply({props})