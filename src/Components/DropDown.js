import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DateMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
        <div>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        Month
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>January</DropdownItem>
          <DropdownItem>February</DropdownItem>
          <DropdownItem>March</DropdownItem>
          <DropdownItem>April</DropdownItem>
          <DropdownItem>May</DropdownItem>
          <DropdownItem>June</DropdownItem>
          <DropdownItem>July</DropdownItem>
          <DropdownItem>August</DropdownItem>
          <DropdownItem>September</DropdownItem>
          <DropdownItem>October</DropdownItem>
          <DropdownItem>November</DropdownItem>
          <DropdownItem>December</DropdownItem>          
        </DropdownMenu>
        </Dropdown>
        
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Day
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
          <DropdownItem>4</DropdownItem>
          <DropdownItem>5</DropdownItem>
          <DropdownItem>6</DropdownItem>
          <DropdownItem>7</DropdownItem>
          <DropdownItem>8</DropdownItem>
          <DropdownItem>9</DropdownItem>
          <DropdownItem>10</DropdownItem>
          <DropdownItem>11</DropdownItem>
          <DropdownItem>12</DropdownItem>
          <DropdownItem>13</DropdownItem>
          <DropdownItem>14</DropdownItem>
          <DropdownItem>15</DropdownItem>
          <DropdownItem>16</DropdownItem>
          <DropdownItem>17</DropdownItem>
          <DropdownItem>18</DropdownItem>
          <DropdownItem>19</DropdownItem>
          <DropdownItem>20</DropdownItem>
          <DropdownItem>21</DropdownItem>
          <DropdownItem>22</DropdownItem>
          <DropdownItem>23</DropdownItem>
          <DropdownItem>24</DropdownItem>
          <DropdownItem>25</DropdownItem>
          <DropdownItem>26</DropdownItem>
          <DropdownItem>27</DropdownItem>
          <DropdownItem>28</DropdownItem>
          <DropdownItem>29</DropdownItem>   
          <DropdownItem>30</DropdownItem>
          <DropdownItem>31</DropdownItem>        
        </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        Month
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem>2015</DropdownItem>
          <DropdownItem>2016</DropdownItem>
          <DropdownItem>2017</DropdownItem>
          <DropdownItem>2018</DropdownItem>
          <DropdownItem>2019</DropdownItem>    
        </DropdownMenu>
        </Dropdown>
        </div>
        
    );
  }
}
