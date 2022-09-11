export function handleCreateErrors (data) {
  const err = {}
  let ok = true

  for (const key in data) {
    if (!data[key] || data[key] === '') {
      ok = false;
      err[key] = 'Este campo es requerido!'
    }
  }

  return { ok, err }
}