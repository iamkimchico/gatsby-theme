import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getColors } from '../../helpers';
import { Select } from '../../inputs';
import { TOption } from '../../inputs/Select';
import Person from '../../shared/Person';
import { Body, Heading } from '../../typography';
import { formatToOption } from '../../utils';

type TProps = {
  collection: any[];
  primary: any;
};

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  justify-items: center;
  max-width: 50em;
  justify-self: center;
  margin-bottom: ${({ theme }) => theme.base.spacing.LG};
`;

const PresentationSelect: React.FC<TProps> = ({ collection, primary }) => {
  const [selectedData, setSelectedData] = useState(collection[0].node);
  const [selected, setSelected] = useState({
    label: collection[0].node.data.name,
    value: collection[0].node.id,
  });

  const colors = getColors(primary.color_scheme);

  useEffect(() => {
    setSelectedData(collection.find(({ node }) => node.id === selected.value).node);
  }, [selected]);

  return (
    <StyledWrapper>
      <Heading size="h3" align="center" color={colors.major}>
        {primary.header}
      </Heading>
      <Select
        defaultValue={selected}
        margin="MD"
        placeholder={primary.select_placeholder}
        isSearchable={false}
        options={formatToOption(collection)}
        onChange={(e) => {
          setSelected(e as TOption);
        }}
      />
      <Heading size="h5" marginBottom="SM" color={colors.base}>
        {selectedData.data.name}
      </Heading>
      <Body align="center" margin="SM" color={colors.black}>
        {selectedData.data.paragraph}
      </Body>
      {console.log(selectedData.data.leader.document.data)}
      <Person type="lowerThird" content={selectedData.data.leader.document.data} color={colors.base} />
    </StyledWrapper>
  );
};

export default PresentationSelect;
