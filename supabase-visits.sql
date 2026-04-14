-- Run this in your Supabase SQL editor to create the visits table

create table if not exists visits (
  id bigint generated always as identity primary key,
  ip text not null,
  path text not null default '/',
  city text,
  region text,
  country text,
  lat double precision,
  lon double precision,
  isp text,
  org text,
  visited_at timestamptz not null default now()
);

-- Index for querying by time
create index if not exists visits_visited_at_idx on visits (visited_at desc);

-- RLS: only service key can insert (no public access)
alter table visits enable row level security;

-- No public policies = only service role key can read/write
