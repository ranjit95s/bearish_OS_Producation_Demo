import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { BoardStatusArray } from '../Board.utils'
import classes from './BoardStatus.module.css'
import StatusHeader from './StatusHeader/StatusHeader'
import AddStatus from '../BoardStatus/AddStatus/AddStatus'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const BoardStatus = () => {
  const [statusData, setStatusData] = useState(BoardStatusArray);
  const [selectedStatus, setSelectedStatus] = useState();

  const handleAddStatus = (i) => {
    const selectedData = selectedStatus[i]
    let lastElement = statusData[statusData.length - 1];
    const newStatus = {
      id: lastElement.id + '1',
      color: selectedData?.colorCode,
      status: selectedData.priority,
      data: []
    }
    setStatusData((statusData) => [...statusData, newStatus]);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(statusData[sInd].data, source.index, destination.index);
      statusData[sInd].data = items
    } else {
      const result = move(statusData[sInd].data, statusData[dInd].data, source, destination);
      statusData[dInd].data = result[dInd]
      statusData[sInd].data = result[sInd]
    }
  }

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  return (
    <Stack>
      <Stack className={classes.mainflexBox}>
        <DragDropContext onDragEnd={onDragEnd} >
          {statusData?.map((item, i) => (
            <Droppable key={i} droppableId={`${i}`} >
              {(provided, snapshot) => (
                <Stack
                  key={item.id}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <StatusHeader item={item} />
                </Stack>
              )}

            </Droppable>
          ))}
        </DragDropContext>
        <AddStatus handleAddStatus={handleAddStatus} setSelectedStatus={setSelectedStatus} />
      </Stack>
    </Stack>
  )
}

export default BoardStatus
