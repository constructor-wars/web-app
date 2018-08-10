CREATE TABLE public.category
(
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


CREATE TABLE public.difficulty
(
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


CREATE TABLE public.list
(
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


CREATE TABLE public.question_list
(
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

CREATE TABLE public.questions_answers
(
    id integer NOT NULL,
    question_title character varying(1000),
    difficulty_id integer,
    category_id integer,
    instruction character varying(1000),
    link_syllabus character varying(1000),
    initial_code character varying(1000),
    github_username character varying(1000),
    test_spec JSON
);

CREATE SEQUENCE public.questions_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.users
(
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


ALTER TABLE ONLY public.category
ALTER COLUMN id
SET
DEFAULT nextval
('public.category_id_seq'::regclass);


ALTER TABLE ONLY public.difficulty
ALTER COLUMN id
SET
DEFAULT nextval
('public.difficulty_id_seq'::regclass);



ALTER TABLE ONLY public.list
ALTER COLUMN id
SET
DEFAULT nextval
('public.list_id_seq'::regclass);


ALTER TABLE ONLY public.question_list
ALTER COLUMN id
SET
DEFAULT nextval
('public.question_list_id_seq'::regclass);



ALTER TABLE ONLY public.questions_answers
ALTER COLUMN id
SET
DEFAULT nextval
('public.questions_answers_id_seq'::regclass);


ALTER TABLE ONLY public.users
ALTER COLUMN id
SET
DEFAULT nextval
('public.users_id_seq'::regclass);



INSERT INTO public.category
    (id, title)
VALUES
    (1, 'Array Methods'),
    (2, 'Functions'),
    (3, 'Objects'),
    (4, 'Operators');


INSERT INTO public.difficulty
    (id, title)
VALUES
    (1, 'easy'),
    (2, 'medium'),
    (3, 'hard');

INSERT INTO public.questions_answers
    (id, question_title , link_syllabus, instruction ,difficulty_id,category_id,github_username,test_spec)
VALUES
    (50, 'Add Function title', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'instructions: Add numbers', 1, 2, 'jamesmcallister',
        '{"initialCode": "function add(a, b){return a+b};", "sampleInput": "[1,3]", "functionName": "add", "expectedResult": "4"}'




INSERT INTO public.users
    (id, github_username)
VALUES
    (1, 'mickey mouse'),
    (2, 'donald duck'),
    (3, 'harry'),
    (4, 'harryd'),
    (5, 'jose'),
    (6, 'Cantem');


SELECT pg_catalog.setval('public.category_id_seq', 5, false);

SELECT pg_catalog.setval('public.difficulty_id_seq', 1, false);

SELECT pg_catalog.setval('public.list_id_seq', 1, false);

SELECT pg_catalog.setval('public.question_list_id_seq', 1, false);

SELECT pg_catalog.setval('public.questions_answers_id_seq', 40, true);

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


ALTER TABLE ONLY public.category
ADD CONSTRAINT category_pkey PRIMARY KEY
(id);


ALTER TABLE ONLY public.difficulty
ADD CONSTRAINT difficulty_pkey PRIMARY KEY
(id);


ALTER TABLE ONLY public.list
ADD CONSTRAINT list_pkey PRIMARY KEY
(id);


ALTER TABLE ONLY public.question_list
ADD CONSTRAINT question_list_pkey PRIMARY KEY
(id);


ALTER TABLE ONLY public.questions_answers
ADD CONSTRAINT questions_answers_pkey PRIMARY KEY
(id);



ALTER TABLE ONLY public.users
ADD CONSTRAINT users_github_username_key UNIQUE
(github_username);



ALTER TABLE ONLY public.users
ADD CONSTRAINT users_pkey PRIMARY KEY
(id);



ALTER TABLE ONLY public.question_list
ADD CONSTRAINT question_list_list_id_fkey FOREIGN KEY
(list_id) REFERENCES public.list
(id);




ALTER TABLE ONLY public.question_list
ADD CONSTRAINT question_list_question_id_fkey FOREIGN KEY
(question_id) REFERENCES public.questions_answers
(id);



ALTER TABLE ONLY public.questions_answers
ADD CONSTRAINT questions_answers_category_id_fkey FOREIGN KEY
(category_id) REFERENCES public.category
(id);



ALTER TABLE ONLY public.questions_answers
ADD CONSTRAINT questions_answers_created_by_fkey FOREIGN KEY
(created_by) REFERENCES public.users
(id);



ALTER TABLE ONLY public.questions_answers
ADD CONSTRAINT questions_answers_difficulty_id_fkey FOREIGN KEY
(difficulty_id) REFERENCES public.difficulty
(id);




ALTER TABLE ONLY public.user_data
ADD CONSTRAINT user_data_question_id_fkey FOREIGN KEY
(question_id) REFERENCES public.questions_answers
(id);
