import ClassRoom from './0-classroom';

function initializeRooms() {
  const room = [19, 20, 34];
  return room.map((size) => new ClassRoom(size));
}
export default initializeRooms;
