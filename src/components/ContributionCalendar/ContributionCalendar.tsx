import React from 'react';
import styled from 'styled-components';
import { ResponsiveCalendar } from '@nivo/calendar';

const Wrapper = styled.div`
  height: 150px;
  width: 700px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const ContributionCalendar: React.FC = () => {
  const data = [
    { day: '2015-03-01', value: 12 },
    { day: '2015-03-02', value: 0 },
    { day: '2015-03-03', value: 8 },
    { day: '2015-03-04', value: 2 },
    { day: '2015-03-05', value: 1 },
  ];
  return (
    <Wrapper>
      <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2015-05-30"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        // legends={[
        //   {
        //     anchor: 'bottom-right',
        //     direction: 'row',
        //     translateY: 36,
        //     itemCount: 4,
        //     itemWidth: 42,
        //     itemHeight: 36,
        //     itemsSpacing: 14,
        //     itemDirection: 'right-to-left',
        //   },
        // ]}
      />
    </Wrapper>
  );
};
