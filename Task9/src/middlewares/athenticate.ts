
export function authenticateToken(req:any, res:any, next:any) {
    if ((req.cookies.token == null) || (req.session.logged == false)) {
        res.json({ message: "ERROR: PLEASE LOGIN" })
    }
    next()
}