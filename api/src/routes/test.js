// router.get("/:id", async function (req, res) {
//     const { id } = req.params;

//     try {
//         const activitiesBD = await Activity.findOne({
//             where: { id: id },
//             include: {
//                 model: Country,
//                 attributes: ["name"],
//                 through: { attributes: [] },
//             },
//         });
//         console.log(activitiesBD);

//         res.json(activitiesBD);
//     } catch (error) {
//         res.status(404).send("Not recived id");
//     }
// });
router.get("/:id", function (req, res) {
    const { id } = req.params;
    try {
        const activitiesBD = await Activity.findOne({
            where: { id: id },
            include: {
                model: Country,
                attributes: ["name"],
                through: { attributes: [] },
            },
        });
        console.log(activitiesBD);

        res.json(activitiesBD);
    } catch (error) {
        res.status(404).send("Not recived id");
    }
});
