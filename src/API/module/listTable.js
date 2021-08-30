import http from "../index";

export async function listTable() {
  return(
    await http.get()
  )
}
