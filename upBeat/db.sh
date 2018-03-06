use PartyServer;
db.createCollection("People"); 
db.createCollection("Songs");
db.createCollection("Parties");

db.People.insert(
[
  { "personid": 1, "name": "sahai","partyid": 1, "password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6" , "isdj": 1},
   { "personid": 2, "name": "idc" ,"partyid": 2, "password": "$2a$10$kTaFlLbfY1nnHnjb3ZUP3OhfsfzduLwl2k/gKLXvHew9uX.1blwne","isdj": 1}
]);

db.Songs.insert(
[
  { "partyid": 1, "songid": 1, "songname": "despacito" ,"upcount": 0 },
  { "partyid": 2, "songid": 2,"songname": "despacito2" ,"upcount": 1}         
]);

db.Parties.insert([
	{"partyid": 1, "djid": 1},
	{"partyid": 2, "djid": 2}

]);
