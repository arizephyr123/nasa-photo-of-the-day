// import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   }

//   render() {
//     return (
//       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle caret>
//         Month
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem>January</DropdownItem>
//           <DropdownItem>February</DropdownItem>
//           <DropdownItem>March</DropdownItem>
//           <DropdownItem>April</DropdownItem>
//           <DropdownItem>May</DropdownItem>
//           <DropdownItem>June</DropdownItem>
//           <DropdownItem>July</DropdownItem>
//           <DropdownItem>August</DropdownItem>
//           <DropdownItem>September</DropdownItem>
//           <DropdownItem>October</DropdownItem>
//           <DropdownItem>November</DropdownItem>
//           <DropdownItem>December</DropdownItem>          
//         </DropdownMenu>
//       </Dropdown>
//     );
//   }
// }