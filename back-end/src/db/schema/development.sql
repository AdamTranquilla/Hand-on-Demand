INSERT INTO users (name, avatar, email, password)
VALUES (
    'Mrs.Doubtfire',
    'https://i.imgur.com/6KarFum.png',
    'robinwilliams@ripthegoat.com',
    'password'
  ),
  (
    'BobTheBuilder',
    'https://i.imgur.com/SqyfWYC.png',
    'Bob@BobsBuilding.com',
    'password'
  ),
  (
    'Harry n'' Marv',
    'https://i.imgur.com/mPZ4Oqk.png',
    'harrynmarv@notascam.com',
    'password'
  ),
  (
    'Tom Brady',
    'https://i.imgur.com/Wy12bEa.png',
    'Tom@balldeflator.com',
    'password'
  ),
  (
    'Curious George',
    'https://i.imgur.com/9b0l4al.png',
    'bannanaboi@msn.org',
    'banananana'
  );
INSERT INTO categories (name, marker)
VALUES ('Light-labour', '/hard-hat-solid.svg'),
  ('Cleaning', '/hand-sparkles-solid.svg'),
  ('Caregiving', '/baby-carriage-solid.svg'),
  ('AutoRepair', '/car-crash-solid.svg'),
  ('MinorRepair', '/tools-solid.svg'),
  ('Photography', '/camera-retro-solid.svg'),
  ('Lessons', '/user-graduate-solid.svg'),
  ('Delivery', '/shipping-fast-solid.svg'),
  ('Miscellaneous', '/question-solid.svg');
INSERT INTO jobs (
    client_id,
    helper_id,
    category_id,
    name,
    description,
    lat,
    lng,
    price,
    pay_type,
    start_date,
    end_date,
    status
  )
VALUES (
    1,
    2,
    1,
    'Furniture mover',
    'I have recently purchased a beautiful new couch, and need someone who can help me carry it up 4 flights of stairs to my apartment',
    45.631060,
    -122.671570,
    10,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    4,
    3,
    5,
    'Need an experienced locksmith',
    'The kool-aid man kicked our door in and now we need to lock fixed before we leave for a ski trip!',
    49.275338,
    -123.1491361,
    200,
    ' total',
    '2021-03-04',
    '2021-03-08',
    'COMPLETED'
  ),
  (
    1,
    null,
    8,
    'Grocery shopping',
    'I''m an old lady and need someone to do my grocery shopping and deliver to my house.',
    49.278300,
    -123.126520,
    40,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    2,
    1,
    3,
    'Babysit a lil'' brat',
    'Take care of this POS for me thanks',
    49.281290,
    -123.115121,
    100,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    2,
    null,
    9,
    'Need marriage counsellor',
    'It seems like I can fix just about anything but my marriage, PLEASE HELP!',
    48.6150804,
    -123.419924,
    40000,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    2,
    4,
    7,
    'Teach my uncoordinated son to throw a football',
    'He''s really bad at sports.. not even sure he''s mine',
    49.3042584,
    -123.1442522,
    12000,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'FILLED'
  ),
  (
    3,
    1,
    3,
    'Caregiver needed during recovery from fall ',
    'We both tripped on some Hotwheels then fell down the stairs onto some Lego.. Need a gentle caregiver to help us eat and go to the washroom during our long road to physical rehabilitation',
    49.281290,
    123.115121,
    100,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    5,
    null,
    7,
    'Help me relearn how to use the monkey bars',
    'I ate so many Bananas during the quarantine that I can barely get of the couch! Someone, please help me train to use the monkey bars again',
    49.2944647,
    -123.150173,
    5,
    '/hr',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    4,
    1,
    7,
    'Teach me how to cook',
    'I would love to learn how to cook so that I can feed my family something other than cereal. Someone, please teach me how to make an egg without burning it, or myself...',
    49.282740,
    -123.133260,
    30,
    ' total',
    '2021-02-20',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    4,
    null,
    4,
    'Put my wheel back on',
    'My Harry is learning how to drive and somehow brought the car back home with one less wheel! Would really appreciate it if someone could show him how to mount a spare. Make sure it''s on tight this time!',
    49.282740,
    -123.133260,
    75,
    ' total',
    '2021-02-20',
    '2021-02-27',
    'COMPLETED'
  ),
  (
    4,
    null,
    6,
    'Need a skilled photoshopper',
    'I have just won yet another Super Bowl, and would like all the photos online of me to show me kissing the Vince Lombardi Trophy!',
    49.280470,
    -123.123200,
    3,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'POSTED'
  ),
  (
    5,
    null,
    2,
    'Party Cleanup',
    'I invited my monkey pals over and we had a few too many banana flavoured craft beers.. We started throwing Banana peels at each other then things escalated quickly.. Need someone to help me clean as I can''t stand the smell!',
    49.281230,
    -123.132590,
    100,
    '/hr',
    '2021-02-24',
    '2021-03-01',
    'POSTED'
  ),
  (
    3,
    2,
    1,
    'Fix my broken stove',
    'I bought a brand new stove just 3 weeks ago and it has already stopped working. In need of someone handy who can fix it!',
    49.272260,
    -123.153460,
    100,
    ' total',
    '2021-02-26',
    '2021-02-27',
    'FILLED'
  ),
  (
    3,
    4,
    6,
    'LinkedIn headshots',
    'Its been a while since we''ve been hired for locksmithing work due to our bad reviews.. Need some professional headshots to spice up our LinkedIn profile!',
    49.264080,
    -123.151230,
    70,
    ' total',
    '2021-02-26',
    '2021-03-02',
    'COMPLETED'
  ),
  (
    3,
    null,
    3,
    'Need a caregiver to help us recover from another fall..',
    'We were ziplining from our friend''s bedroom window to his treehouse and the rope broke! We fell two stories and broke our legs. Need a caregiver to feed us while we recover ',
    49.261320,
    -123.113940,
    200,
    '/hr',
    '2021-02-26',
    '2021-03-19',
    'POSTED'
  ),
  (
    4,
    null,
    5,
    'I put my mommas famous pasta in my toaster, now its broken!',
    'My microwave broke after I tried to heat up some cutlery, so I tried to cook pasta in my toaster and now that doesn''t work either.. Someone, please fix it!',
    49.271600,
    -123.106500,
    100,
    ' total',
    '2021-02-26',
    '2021-03-01',
    'POSTED'
  ),
  (
    3,
    null,
    8,
    'Pickup groceries from Granville market',
    'I''ve been meaning to pick up some fresh produce, but haven''t been able to make it down there. Would really appreciate some help!',
    49.2727014,
    -123.1352146,
    25,
    ' total',
    '2021-02-26',
    '2021-03-08',
    'POSTED'
  ),
  (
    4,
    null,
    9,
    'Dropped my iPhone in the Vancouver Aquarium!',
    'I need a scuba diver to get it for me, I''ll pay for however long it takes!',
    49.3007961,
    -123.1309293,
    200,
    '/hr',
    '2021-02-26',
    '2021-03-07',
    'POSTED'
  ),
  (
    5,
    null,
    4,
    'Hit a pothole, now my car is upside down!',
    'Need a bodybuilder or mechanic to help me flip it back onto its wheels!',
    49.275338,
    -123.1491361,
    100,
    ' total',
    '2021-02-26',
    '2021-03-05',
    'POSTED'
  ),
  (
    3,
    null,
    1,
    'Hold the ladder for Christmas lights',
    'Its March already so it''s about time I get my Christmas lights setup!! I need someone to hold the ladder for me!',
    49.2900541,
    -123.1376043,
    12,
    '/hr',
    '2021-03-15',
    '2021-03-16',
    'POSTED'
  ),
  (
    1,
    5,
    8,
    'Need someone to pick up and deliver Banana bread',
    'I placed an order for 6 fresh loaves of Banana Bread from the Robson Bakery, please deliver them to my house! Thank you',
    49.29118829999999,
    -123.1347056,
    20,
    ' total',
    '2021-03-15',
    '2021-03-16',
    'COMPLETED'
  );
INSERT INTO offers (helper_id, job_id, price, pay_type, status)
VALUES (2, 1, 20, '/hr', 'REVIEWED'),
  (3, 1, 30, '/hr', 'PENDING'),
  (4, 1, 30, '/hr', 'PENDING'),
  (4, 2, 150, ' total', 'PENDING'),
  (3, 2, 20, ' total', 'REVIEWED'),
  (2, 2, 25, ' total', 'PENDING'),
  (2, 3, 20, '/hr', 'PENDING'),
  (4, 3, 100, '/hr', 'PENDING'),
  (2, 5, 20, '/hr', 'PENDING'),
  (1, 4, 10, '/hr', 'REVIEWED'),
  (3, 4, 200, '/hr', 'PENDING'),
  (4, 4, 20, '/hr', 'PENDING'),
  (4, 5, 40, '/hr', 'PENDING'),
  (3, 5, 200, '/hr', 'PENDING'),
  (3, 6, 1, ' total', 'PENDING'),
  (4, 6, 100, '/hr', 'ACCEPTED'),
  (1, 6, 5, '/hr', 'PENDING'),
  (1, 7, 200, '/hr', 'REVIEWED'),
  (2, 7, 1212, ' total', 'PENDING'),
  (4, 8, 200, '/hr', 'PENDING'),
  (2, 8, 1250, ' total', 'REVIEWED');
INSERT INTO messages (user_id, offer_id, message, timestamp)
VALUES (
    2,
    1,
    'BobTheBuilder sent an offer: $10',
    '2021-02-17T09:14:39.223Z'
  ),
  (
    2,
    1,
    'Hello, I''m interested in your job to help you move your furniture. Let me know I''m available anytime!',
    '2021-02-18T09:14:45.223Z'
  ),
  (
    1,
    1,
    'Perfect, let''s talk in the morning then',
    '2021-02-21T09:14:39.223Z'
  ),
  (
    1,
    15,
    'Mrs.Doubtfire sent an offer: $2000',
    '2021-02-20T09:15:39.223Z'
  ),
  (
    1,
    15,
    'Hey, I think I might be able to help you out, I know it''s a tough situation. Let''s chat and see if we might be a good fit',
    '2021-02-21T09:15:39.223Z'
  ),
  (
    3,
    15,
    'I''m willing to try anything at this point, I know we can get through this! If you''re okay with the price let''s find a time that works.',
    '2021-02-22T09:15:39.223Z'
  ),
  (
    2,
    7,
    'BobTheBuilder sent an offer: $2000',
    '2021-02-20T09:15:39.223Z'
  );
INSERT INTO reviews (helper_id, job_id, stars, details, timestamp)
VALUES (
    2,
    1,
    5,
    'Bob did such a great job lifting my beautiful victoria era, hardwood, 7 seat sectional couch up the stairs up the 10 flights of stairs to my appartment, I gave him a lemonade as a tip for all his hardwork',
    '2021-02-27 24:00:00'
  ),
  (
    1,
    4,
    3,
    'Mrs.Doubtfire did a great job babysitting.. but she left the toliet seat up and now my wife is asking for a divorce!',
    '2021-02-27 24:00:00'
  ),
  (
    1,
    7,
    5,
    'After Marv and I were seriously injured by some hotwheels Mrs.Doubtfire helped us get back to contracting for our lovely community!',
    '2021-02-27 24:00:00'
  ),
  (
    5,
    21,
    1,
    'I placed an order for 6 fresh loaves of Banana Bread from the Robson Bakery and took a chance on Curious George.. He ate my order and delivered me a loaf of wonderbread wrapped in Banana peels!',
    '2021-02-27 24:00:00'
  ),
  (
    4,
    13,
    3,
    'We booked Tom Brady to spice up our LinkedIn profile with some proffesional headshots so we can start locksmithing again. All the photos he took were actually just selfies of him with his Superbowl rings! He did sign them tho..',
    '2021-02-27 24:00:00'
  ),
  (
    3,
    2,
    1,
    'The kool-aid man kicked our door in right before we left on vacation so we booked Harry and Marv as locksmiths. When we got home our house was flooded and one of my SuperBowl rings was gone. Good thing I have 6 more',
    '2021-02-27 24:00:00'
  );