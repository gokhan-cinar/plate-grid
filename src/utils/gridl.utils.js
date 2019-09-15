export function createGrid(verticalItems, horizontalItems) {
  const seperator = ',';

  let vertical = verticalItems.split(seperator);
  let horizontal = horizontalItems.split(seperator);

  return {
    x: vertical,
    y: horizontal
  }
}

export function createVehicleTable(verticalItems, horizontalItems) {
  console.log('verticalItems: ', verticalItems);
  console.log('horizontalItems: ', horizontalItems);
  
  console.log(Object.keys(horizontalItems));
  const vehicles = [];

  for (const vertical in verticalItems) {
    for (const horizontal in horizontalItems) {
      const res = `${verticalItems[vertical]}${horizontalItems[horizontal]}`;

      vehicles.push({
        code: res,
        vehicle: null
      });
    }
  }

  return vehicles;
}

export function addVehicle(vehicles, item) {
  console.log('vehicles: ', vehicles);
  const newVehicles = [...vehicles];
  const samePlate = vehicles
      .filter(vehicleItem => vehicleItem.vehicle)
      .some(vehicleItem => vehicleItem.vehicle.plate === item.plate);

  if (samePlate) {
    return newVehicles;
  }

  let emptySlots = newVehicles.filter(slot => !slot.vehicle);
  emptySlots[0]['vehicle'] = item;

  return newVehicles;
}

export function deleteVehicle(vehicles, vehiclePlate) {
  const newVehicles = [...vehicles];

  const updatedVehicles = newVehicles
      .map(vehicleItem => {
        let result = vehicleItem;

        if (vehicleItem.vehicle) {
          const currentVehicle = vehicleItem.vehicle;

          if  (currentVehicle.plate === vehiclePlate) {
            result = {
              code: vehicleItem.code,
              vehicle: null
            };
          }
        }

        return result;
      });

  return updatedVehicles;

}
