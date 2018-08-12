CREATE TABLE public.category (
    id integer NOT NULL,
    title character varying(500)
);


CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.difficulty (
    id integer NOT NULL,
    title character varying(500)
);


CREATE SEQUENCE public.difficulty_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.list (
    id integer NOT NULL,
    title character varying(500)
);

CREATE SEQUENCE public.list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.question_list (
    id integer NOT NULL,
    question_id integer,
    list_id integer
);

CREATE SEQUENCE public.question_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE public.questions_answers (
    id integer NOT NULL,
    question_title character varying(1000),
    difficulty_id integer,
    category_id integer,
    instruction character varying(1000),
    link_syllabus character varying(1000),
    test_spec jsonb,
    github_username character varying (1000)
);

CREATE SEQUENCE public.questions_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- CREATE TABLE public.user_data (
--     id integer NOT NULL,
--     user_id integer,
--     question_id integer,
--     user_edits character varying(1000),
--     user_notes character varying(1000),
--     completed boolean,
--     ask_for_help character varying(1000)
-- );


-- CREATE SEQUENCE public.user_data_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;




CREATE TABLE public.users (
    id integer NOT NULL,
    github_username character varying(100) NOT NULL,
    admin boolean
);

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


ALTER TABLE ONLY public.difficulty ALTER COLUMN id SET DEFAULT nextval('public.difficulty_id_seq'::regclass);



ALTER TABLE ONLY public.list ALTER COLUMN id SET DEFAULT nextval('public.list_id_seq'::regclass);


ALTER TABLE ONLY public.question_list ALTER COLUMN id SET DEFAULT nextval('public.question_list_id_seq'::regclass);



ALTER TABLE ONLY public.questions_answers ALTER COLUMN id SET DEFAULT nextval('public.questions_answers_id_seq'::regclass);


--ALTER TABLE ONLY public.user_data ALTER COLUMN id SET DEFAULT nextval('public.user_data_id_seq'::regclass);



ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);



INSERT INTO public.category (id, title)
VALUES 
(1,	'Array Methods'),
(2, 'Functions'),
(3,	'Objects'),
(4,	'Operators');


INSERT INTO public.difficulty (id, title) VALUES 
(1,	'easy'),
(2,	'medium'),
(3,	'hard');

insert into PUBLIC.questions_answers (id, question_title, difficulty_id, category_id, instruction ,link_syllabus, test_spec, github_username ) values
(1, 'Add', 1, 2, 'Add numbers', 'http','{"initialCode": "function add(a, b){return a + b};", "sampleInput": "[1, 2]", "functionName": "add", "expectedResult": "3" }', 'Bob' );


-- INSERT INTO public.questions_answers (id, question_title, test, difficulty_id, category_id, instruction, link_syllabus, initial_code) VALUES 

-- (25, 'Remove the middle string.', 'test(''Remove middle'', () => {\n  const words = [ ''mouse'', ''giraffe'', ''queen'', ''window'', ''bottle''];\n\n  const expectedWords = [ ''mouse'', ''giraffe'', ''window'', ''bottle''];\n  const expectedOutput = [ ''queen'' ];\n\n  const output = removeMiddle( words );\n\n  expect(output).toEqual(expectedOutput);\n  expect(words).toEqual(expectedWords);\n});',	1,	2,	'Words is an array which contains an odd number of strings. Return a new array containing only the middle word.The words array should no longer contain the middle word Hint: splice.\n\n',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function removeMiddle( words ){\n  // enter your code here\n}'),
-- (26, 'Get second and third  item from the array.', 'test(''Get second and third'', () => {\n  const numbers = [ 90, 5, 11, 5, 6 ];\n\n  const expectedOutput = [ 5, 11];\n  const expectedNumbers = [ 90, 5, 11, 5, 6 ];\n\n  const output = get2ndAnd3rd( numbers );\n\n  expect(output).toEqual(expectedOutput);\n  expect(numbers).toEqual(expectedNumbers);\n});', 1,	2,	'myArray is an array of numbers. Return an array containing the 2nd and 3rd items from myArray. myArray should remain unchanged. Hint: slice.\n\n\n',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function' ,	'function get2ndAnd3rd( myArray ){\n  // enter your code here\n}'),
-- (1,	'Add numbers.',	'test(''Add'', () => {const result = add( 2, 3 ); expect( result ).toEqual( 5 );});',	1,	2,	'Add the two arguments and return the sum.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function add(a, b){\n  //enter your code here \n}'),
-- (2,	'Multiply numbers.', 	'test(''Multiply'', () => {\n  const result = multiply( 4, 5, 3, 7 );\n  expect( result ).toEqual( 420 );\n});',	1,	2,	'This function is passed 4 parameters.Multiply them and return the result.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function multiply(){\n  //enter your code here \n}'),
-- (3,	'Average',	'test(''Average'', () => {\n  const result = average( 2.2, 1.68, 1.76, 1.54, 2 );\n  expect( parseFloat( Number( result ).toFixed( 3 ) ) ).toEqual( 1.836 );\n});',	1,	2,	'This function is passed 5 heights in meters. Calculate their average and return it.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function average(){\n//enter your code here\n}'),
-- (4,	'Reminder',	'test(''Remainder'', () => {\n  const result = remainder( 17, 5 );\n  expect( result ).toEqual( 2 );\n});',	1,	2,	'This function is passed 2 arguments. Return the remainder of first argument when divided by the second.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function', 'function remainder(){\n}'),
-- (5,	'Expotential',	'test(''Exponential'', () => {\n  const result = exponential( 7, 4 );\n  expect( result ).toEqual( 2401 );\n});',	1,	2,	'This function is passed 2 arguments. Return first argument to the power of second argument. Hint: you may need to look up the exponention operator.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function', 'function exponential(){\n//enter your code here\n}'),
-- (20, 'Lax Equality',	'test(''Lax equality '', () => {\n  const result = laxEquality( 10, ''10'' );\n  expect( result ).toEqual( true );\n\n  const result2 = laxEquality( 5, 5 );\n  expect( result2 ).toEqual( false );\n});',	1,	2,	  'This function is passed 2 arguments. Return true if they are equal but not strictly equal.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function laxEquality(){\n  // enter your code here\n}'),
-- (21, 'Strict Equality',	'test(''Strict equal '', () => {\n  const result1 = strictEqual( 10, ''10'', 10 );\n  expect( result1 ).toEqual( false );\n\n  const result2 = strictEqual( 5, 5, 5 );\n  expect( result2 ).toEqual( true );\n\n  const result3 = strictEqual( true, true, 5 );\n  expect( result3 ).toEqual( false );\n\n  const result4 = strictEqual( 10, ''hello'', ''hello'' );\n  expect( result4 ).toEqual( false );\n});',	1,	2,	'Function is passed 3 arguments. Return true if they are all strictly equal and false otherwise',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function strictEqual(){\n  // enter your code here\n}'),
-- (22, 'Smaller',	'test(''Smaller'', () => {\n  const result1 = smaller( 7, 7 );\n  expect( result1 ).toEqual( true );\n\n  const result2 = smaller( -7, 7 );\n  expect( result2 ).toEqual( true );\n\n  const result3 = smaller( 8, 7 );\n  expect( result3 ).toEqual( ''smaller'' );\n});',	1,	2,	'This function is passed 2 arguments. Return true if second argument is greater than or equal to first, otherwise return string ''smaller''.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function smaller(){\n  // enter your code here\n\n}'),
-- (23, 'Divisible by',	'test(''Is divisible by'', () => {\n  const result1 = isDivisibleBy( 9, 4, 36 );\n  expect( result1 ).toEqual( true );\n\n  const result2 = isDivisibleBy( 9, 4, 35 );\n  expect( result2 ).toEqual( false );\n\n  const result3 = isDivisibleBy( 9, 8, 32 );\n  expect( result3 ).toEqual( true );\n\n  const result4 = isDivisibleBy( 4, 7, 32 );\n  expect( result4 ).toEqual( true );\n});',	1,	2,	'If number is divisible by divider1 or divider2 return true or false otherwise. Do not use if/else or ternary.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function isDivisibleBy(divider1, divider2, number){\n  // enter your code here\n}'),
-- (24, 'Even numbers',	'test(''Evens'', () => {\n  const result1 = evens( 7, 7, 7, 7 );\n  expect( result1 ).toEqual( false );\n\n  const result2 = evens( 1, 2, 3, 4 );\n  expect( result2 ).toEqual( false );\n\n  const result3 = evens( 10, 10, 10, 10 );\n  expect( result3 ).toEqual( true );\n\n  const result4 = evens( 10, 10, 10, 11 );\n  expect( result4 ).toEqual( false );\n});',	1,	2,	'This function is passed 4 numbers. Return true if all numbers are even or false otherwise. Do not use if/else or ternary.\n',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function evens(){\n  // enter your code here\n}'),
-- (27, 'Return the array with every item incremented by 1.',	'test(''Add 1 to each item in myArray'', () => {\n  const myArray = [ 31, 57, 12, 5];\n\n  const unchanged = [ 31, 57, 12, 5];\n  const expected = [ 32, 58, 13, 6];\n  const output = mapper( myArray );\n\n\n  expect(output).toEqual(expected);\n  expect(myArray).toEqual(unchanged);\n});',	2,	2,	'myArray is an array of numbers. Return a new array which has all items in myArray incremented by one. myArray should remain unchanged.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function mapper( myArray ){\n  // enter your code here\n}'),
-- (29, 'Cities',	'test(''Cities'', () => {\n  const capitals = [\n    { city: ''Paris'', country: ''France'' },\n    { city: ''Madrid'', country: ''Spain'' },\n    { city: ''Rome'', country: ''Italy'' },\n  ];\n\n  function transform({city, country}){\n    return `${city} is the capital of ${country}`;\n  }\n\n  const expected = [\n    ''Paris is the capital of France'',\n    ''Madrid is the capital of Spain'',\n    ''Rome is the capital of Italy''\n  ];\n\n  const result = cities(capitals, transform);\n\n  expect(result).toEqual(expected);\n});',	2,	2,	'capitals is an array of objects that have a city and country property for example\n   {\n     city: ''Paris'',\n     country: ''France''\n   }\n   formatter is a callback function provided for you which\n   transforms a capital object into a sentence returns it such as\n   ''Paris is the capital of France''.\n   Apply formatter to each object in capitals array and\n   return an array of resulting sentences.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function cities( capitals, formatter ){\n\n//enter your code here\n\n}'),
-- (31, 'Even',	'test(''Get even numbers'', () => {\n  const numbers = [ 22, 13, 73, 82, 4];\n  const expected = [ 22, 82, 4 ];\n\n  const output = even( numbers );\n  expect(output).toEqual( expected );\n});',	2,	2,	'numbers is an array of numbers\nreturn a new array that contains only even numbers from the input array\n',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function even( numbers ){\n  // enter your code here\n}'),
-- (36, 'Sorting Strings',	'test(''Sorting strings'', () => {\n  const companies = [''netflix'', ''google'', ''amazon'', ''facebook'', ''microsoft'', ''apple''];\n  const expected = [''amazon'', ''apple'', ''facebook'', ''google'', ''microsoft'', ''netflix'' ];\n\n  const output = sortingStrings(companies);\n\n  expect( output ).toEqual( expected );\n});',	2,	2,	'strings is an array of strings\nsort them in alphabetical order and return the sorted array.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function sortingStrings(strings){\n  // Enter your code here\n}'),
-- (37, 'Sorting Numbers',	'test(''Sorting numbers'', () => {\n  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];\n  const expected = [-11,  -2, 0, 1, 2, 3, 22, 37, 99, 101];\n\n  const output = sortingNumbers(numbers);\n\n  expect( output ).toEqual( expected );\n});',	2,	2,	'numbers is an array of numbers\nsort them in ascending order and return the sorted array.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function sortingNumbers(numbers){\n  // Enter your code here\n}'),
-- (38, 'Sorting Numbers Descending',	'test(''Sorting numbers descending'', () => {\n  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];\n  const expected = [101, 99, 37, 22, 3, 2, 1, 0, -2, -11];\n\n  const output = sortingNumbersDescending(numbers);\n\n  expect( output ).toEqual( expected );\n});',	2,	2,	'numbers is an array of numbers\n sort them in descending order and return the sorted array.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function sortingNumbersDescending(numbers){\n  // Enter your code here\n}'),
-- (40, 'Delete Colour',	'test(''Delete colour'', () => {\n  const car = {\n    make: ''Ford'',\n    model: ''Mondeo'',\n    color: ''gold''\n  };\n  const expected = {\n    make: ''Ford'',\n    model: ''Mondeo'',\n  };\n\n  const output = deleteColour(car);\n\n  expect( output ).toEqual( expected );\n});',	3,	2,	'car is an object with properties make, model and colour. For example\n {\n make: ''Ford'',\n model: ''Fiesta'',\n color: ''red''\n }\n\n delete the property colour and return car without this property.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function deleteColour( car ){\n  // enter your code here\n};'),
-- (28, 'Word lengths',	'test(''Get word lengths'', () => {\n  const words = [ ''sun'', ''potato'', ''roundabout'', ''pizza'' ];\n  const expected = [ 3, 6, 10, 5 ];\n\n  const output = wordLengths( words );\n  expect(output).toEqual( expected );\n});',	2,	2,	'words is an array of strings\n return a new array that contains the number of letters in each word\n for example\n input:\n  [ ''jupiter'', ''mars'', ''saturn'' ]\n  output:\n   [ 7, 4, 6]\n',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function wordLengths( words ){\n  // enter your code here\n}'),
-- (30, 'Larger than ten',	'test(''Get numbers greater than 10'', () => {\n  const numbers = [ 4, 10, 32, 9, 21];\n  const expected = [ 32, 21 ];\n\n  const output = largerThanTen( numbers );\n  expect(output).toEqual( expected );\n});\n',	2,	2,	'numbers is an array of numbers\nreturn a new array that contains only numbers\nfrom the input array which are greater than 10.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function largerThanTen( numbers ){\n  // enter your code here\n}'),
-- (32, 'Find the needle',	'test(''Find the needle'', () => {\n  const words = [ ''house'', ''train'', ''slide'', ''needle'', ''book'' ];\n  const expected = 3;\n\n  const output = findTheNeedle( words );\n  expect(output).toEqual( expected );\n});',	2,	2,	'words is an array of words\nreturn the index of the word ''needle''.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function findTheNeedle( words ){\n  // Enter your code here\n}'),
-- (33, 'Find largest',	'test(''Find largest number'', () => {\n  const numbers = [ 3, 21, 88, 4, 36];\n  const expected = 88;\n\n  const output = findLargest( numbers );\n  expect(output).toEqual( expected );\n});',	2,	2,	'numbers is an array of numbers\nreturn the largest number from that array.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function findLargest( numbers ){\n  // enter your code here\n}\n'),
-- (34, 'Add all numbers',	'test(''Add all numbers'', () => {\n  const numbers = [ 9, 23, 10, 3, 8 ];\n  const expected = 53;\n\n  const output = addAllnumbers( numbers );\n\n  expect( output ).toEqual( 53 );\n});',	2,	2,	'numbers is an array of numbers\nreturn the sum of all the numbers in the array.',	'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function addAllnumbers( numbers ) {\n  // Enter your code here\n}'),
-- (35, 'Averages',	'test(''Averages'', () => {\n  const numbers = [ 4, ''-'', 8, 11, ''hello'', ''57'', 0, 2 ];\n  const expected = 53;\n\n  const output = averages( numbers );\n\n  expect( output ).toEqual( 5 );\n});',	2,	2,	'things is an array of numbers and strings. Return the average of all the numbers. Be sure to exclude the strings.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',	'function averages( things ) {\n  // Enter your code here\n}');



-- INSERT INTO public.user_data (id, user_id, question_id, completed) 
-- VALUES (2,	3,	1,  't' ),
-- (3,	6,	2, 't' ),
-- (4,	6,	3, 't' ),
-- (5,	6,	20, 't' );


INSERT INTO public.users (id, github_username) VALUES
(1,	'mickey mouse'),
(2,	'donald duck'),	
(3,	'harry'),	
(4,	'harryd'),	
(5,	'jose'),	
(6,	'Cantem');


SELECT pg_catalog.setval('public.category_id_seq', 5, false);

SELECT pg_catalog.setval('public.difficulty_id_seq', 1, false);

SELECT pg_catalog.setval('public.list_id_seq', 1, false);

SELECT pg_catalog.setval('public.question_list_id_seq', 1, false);

SELECT pg_catalog.setval('public.questions_answers_id_seq', 40, true);

-- SELECT pg_catalog.setval('public.user_data_id_seq', 5, true);

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.difficulty
    ADD CONSTRAINT difficulty_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.question_list
    ADD CONSTRAINT question_list_pkey PRIMARY KEY (id);


ALTER TABLE ONLY public.questions_answers
    ADD CONSTRAINT questions_answers_pkey PRIMARY KEY (id);


-- ALTER TABLE ONLY public.user_data
--     ADD CONSTRAINT user_data_pkey PRIMARY KEY (id);




ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_github_username_key UNIQUE (github_username);



ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);



ALTER TABLE ONLY public.question_list
    ADD CONSTRAINT question_list_list_id_fkey FOREIGN KEY (list_id) REFERENCES public.list(id);




ALTER TABLE ONLY public.question_list
    ADD CONSTRAINT question_list_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions_answers(id);



ALTER TABLE ONLY public.questions_answers
    ADD CONSTRAINT questions_answers_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);



--ALTER TABLE ONLY public.questions_answers
--    ADD CONSTRAINT questions_answers_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);



ALTER TABLE ONLY public.questions_answers
    ADD CONSTRAINT questions_answers_difficulty_id_fkey FOREIGN KEY (difficulty_id) REFERENCES public.difficulty(id);




-- ALTER TABLE ONLY public.user_data
--     ADD CONSTRAINT user_data_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.questions_answers(id);



-- ALTER TABLE ONLY public.user_data
--     ADD CONSTRAINT user_data_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


