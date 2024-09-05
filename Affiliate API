const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 3000;

require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,   
    user: process.env.DB_User,         
    password: process.env.DB_PASSWORD, 
    database: process.env.DATABASE,  
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.use(express.json());  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  //place endpoint/s

  app.get('/', (req, res) => {
    res.send("you have now joined La Vitrine API");
  })

  //using GET endpoint to request data from LV Database in regards to 
  //affiliate info

  app.get('/Affiliates', (req, res) => {
    const sql = 'SELECT * FROM Affiliates';
    
    pool.query(sql, (err, results) => {
        if (err) {
          console.error('Error retrieving Affiliates:', err.message);
          return res.status(500).json({ error: 'error within lv DB' });
        }
        
        res.status(200).json(results);
      });
    });
  
  // example of post body request
 // {
 //"A_id":"11"
 //"Points": "Harriet"
 //"REWARDS": "Darby"
 //
 //}

 //post request to add new affiliate to DB

 app.post('/new-affiliate', (req, res) => {
    const { A_id, Points, REWARDS } = req.body;

    const sql = "INSERT INTO REWARDS(A_id, Points, REWARDS) VALUES (?, ?, ?)";
    pool.query(sql, [A_id, Points, REWARDS], (err, result) => {
        if (err) {
            console.error('Error adding reward:', err.message);
            return res.status(500).json({error: "Error within LV DB"})
        }
        res.status(201).json({id: result.insertId, message: `affiliate ${A_id}} added successfully`});
    })
})


    
app.put('/update-POINTS/:id', (req, res) => {
  const A_Id = req.params.id;
  const { A_id, Visits, POINTS } = req.body;
  
  const sql = 'UPDATE POINTS SET A_id = 10, Visits = 200, POINTS = 200000 WHERE A_id = 10';
  pool.query(sql, [A_id, Visits, POINTS], (err, result) => {
    if (err) {
      console.error('Error updating Affiliate:', err.message);
      return res.status(500).json({ error: 'error within LV Database' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Affiliate not found' });
    }
    
    res.status(200).json({ message: 'Affiliate updated successfully' });
  });
});


    


