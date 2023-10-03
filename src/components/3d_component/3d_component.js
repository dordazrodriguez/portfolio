import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const MyD3Component = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
 
      const svg = d3.select(d3Container.current);

      // Your D3 code goes here. For example:
      svg.append('text')
         .attr('x', 10)
         .attr('y', 50)
         .text('Hello, D3!');
   
  }, [data, d3Container.current]);

  return (
    <svg
      className="d3-component"
      width={400}
      height={200}
      ref={d3Container}
    />
  );
}

export default MyD3Component;
