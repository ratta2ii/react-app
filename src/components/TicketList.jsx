import React from 'react';
import Ticket from './Ticket';


function TicketList() {

  return (
    <div>
      <Ticket
        location="3A"
        names="Trevor & Sharon"
        issue="Firebase will not save record!" />
    </div>
  );
}

export default TicketList;