export const getStatusColor = (status: string): string => {
  switch (status) {
    case `создано`:
      return `#007bff`;
    case `принимается`:
      return "#17a2b8";
    case `принято`:
      return "#28a745";
    case `обработано`:
      return "#ffc107";
    case `отправляется`:
      return "#17a2b8";
    case `отправлено`:
      return "#007bff";
    case `доставлено`:
      return "#28a745";
    case `прочитано`:
      return "#6f42c1";
    default:
      return `#dc3545`;
  }
}