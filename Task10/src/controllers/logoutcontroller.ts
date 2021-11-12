export function Logout(req: any, res: any) {
    req.session.logged
    res.cookie('token', {}, { maxAge: -1 }).json({ message: "logged out" })
  }