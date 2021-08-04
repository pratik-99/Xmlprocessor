import React, { Component } from 'react';

class AssetAttribute extends Component {
  render() {
      return (
        <div>
         
         {/* {this.props.jsonData.map(asset => ( {asset.Attributes.map(att=>(<span>Name:{att.Name},DataType: {att.DataType}, Value:{att.Value}<br/></span>))}))} */}
         {this.props.jsonData.map(asset => (
                    <div class="ex2">
                      {asset.Attributes.map(att=>(<tr><td>{att.Name}</td> <td> {att.DataType}</td> <td>{att.Value}</td></tr>))}</div>
               ))}
        </div>
    );
  }
}


export default AssetAttribute;