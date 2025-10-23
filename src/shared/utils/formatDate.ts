export const formatDate = (d: string | Date | number | null): string | Date | number | null => {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  if (d === null) {
    return d
  }

  if (typeof d !== `string`) {
    return d
  }

  if (!regex.test(d)) {
    return d
  }
  return d.slice(0, -5).replace(`T`, ` `)
}