import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_announcement_bar_animation" AS ENUM('None', 'Left To Right', 'Right To Left');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_others_common_type" AS ENUM('banner_image_slider', 'advanced_image_slider', 'circle_image_slider', 'circle_image_slider_with_text', 'square_image_grid', 'square_image_slider');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_others_common_items_navigate" AS ENUM('none', 'product', 'collection', 'external_link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banner_view" AS ENUM('horizontal', 'vertical');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banner_items_navigate" AS ENUM('none', 'product', 'collection', 'external_link');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_banner_image_adjustment" AS ENUM('fill', 'fit', 'stretch');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_product_type" AS ENUM('product_grid', 'product_slider');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_product_image_adjustment" AS ENUM('fill', 'fit', 'stretch');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_collection_type" AS ENUM('collection_card_slider', 'collection_card_stack', 'collection_slider', 'collection_grid');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_collection_image_adjustment" AS ENUM('fill', 'fit', 'stretch');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "branding_theme" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_id" varchar NOT NULL,
	"app_name" varchar,
	"app_icon_url" varchar,
	"launch_screen_image" varchar,
	"launch_screen_bg_colour" varchar,
	"hf_bg_color" varchar,
	"hf_icon_color" varchar,
	"pb_bg_color" varchar,
	"pb_text_color" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "video" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"visibility" boolean,
	"block_title" varchar,
	"video_url" varchar,
	"mute" boolean,
	"auto_play" boolean,
	"full_width" boolean,
	"loop" boolean,
	"show_playback" boolean,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "home_page_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "home_page" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop_id" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "home_page_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"announcement_bar_id" integer,
	"banner_id" integer,
	"collection_id" integer,
	"event_timer_id" integer,
	"others_common_id" integer,
	"product_id" integer,
	"social_id" integer,
	"paragraph_id" integer
);

CREATE TABLE IF NOT EXISTS "announcement_bar" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"visibility" boolean,
	"text" varchar,
	"text_color" varchar,
	"bg_color" varchar,
	"animation" "enum_announcement_bar_animation",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "others_common_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"image_url" varchar NOT NULL,
	"navigate" "enum_others_common_items_navigate",
	"redirect_id" varchar
);

CREATE TABLE IF NOT EXISTS "others_common" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "enum_others_common_type" NOT NULL,
	"visibility" boolean,
	"auto_slide_enable" boolean,
	"auto_slide_time" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "banner" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"view" "enum_banner_view",
	"visibility" boolean,
	"items_image_url" varchar NOT NULL,
	"items_navigate" "enum_banner_items_navigate",
	"items_redirect_id" varchar,
	"imageAdjustment" "enum_banner_image_adjustment",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "event_timer" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"visibility" boolean,
	"block_title" varchar,
	"text_colour" varchar,
	"bg_colour" varchar,
	"duration_day" numeric,
	"duration_hour" numeric,
	"duration_minute" numeric,
	"start_time_date" timestamp(3) with time zone,
	"start_time_time" timestamp(3) with time zone,
	"start_time_time_zone" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "paragraph" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"visibility" boolean,
	"content" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "social_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"social_name" varchar,
	"url" varchar NOT NULL,
	"item_visibility" boolean
);

CREATE TABLE IF NOT EXISTS "social" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"visibility" boolean,
	"block_title" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "enum_product_type" NOT NULL,
	"visibility" boolean,
	"block_title" varchar,
	"collection_id" varchar NOT NULL,
	"no_of_product" numeric,
	"imageAdjustment" "enum_product_image_adjustment",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "collection_collection_ids" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"collection_id" varchar NOT NULL,
	"image_src" varchar,
	"title" varchar
);

CREATE TABLE IF NOT EXISTS "collection" (
	"id" serial PRIMARY KEY NOT NULL,
	"visbillity" boolean,
	"type" "enum_collection_type" NOT NULL,
	"imageAdjustment" "enum_collection_image_adjustment",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "session" (
	"id" varchar PRIMARY KEY NOT NULL,
	"content" varchar NOT NULL,
	"shop" varchar NOT NULL,
	"server_key" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "active_stores" (
	"id" serial PRIMARY KEY NOT NULL,
	"shop" varchar NOT NULL,
	"is_active" boolean,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "shop_id_idx" ON "branding_theme" ("shop_id");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "branding_theme" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "video" ("created_at");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "home_page_items" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "home_page_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "home_page" ("created_at");
CREATE INDEX IF NOT EXISTS "order_idx" ON "home_page_rels" ("order");
CREATE INDEX IF NOT EXISTS "parent_idx" ON "home_page_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "home_page_rels" ("path");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "announcement_bar" ("created_at");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "others_common_items" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "others_common_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "others_common" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "banner" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "event_timer" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "paragraph" ("created_at");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "social_items" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "social_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "social" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "product" ("created_at");
CREATE INDEX IF NOT EXISTS "_order_idx" ON "collection_collection_ids" ("_order");
CREATE INDEX IF NOT EXISTS "_parent_id_idx" ON "collection_collection_ids" ("_parent_id");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "collection" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "session" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "active_stores" ("created_at");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "created_at_idx" ON "payload_migrations" ("created_at");
DO $$ BEGIN
 ALTER TABLE "home_page_items" ADD CONSTRAINT "home_page_items__parent_id_home_page_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "home_page"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_parent_id_home_page_id_fk" FOREIGN KEY ("parent_id") REFERENCES "home_page"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_announcement_bar_id_announcement_bar_id_fk" FOREIGN KEY ("announcement_bar_id") REFERENCES "announcement_bar"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_banner_id_banner_id_fk" FOREIGN KEY ("banner_id") REFERENCES "banner"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_event_timer_id_event_timer_id_fk" FOREIGN KEY ("event_timer_id") REFERENCES "event_timer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_others_common_id_others_common_id_fk" FOREIGN KEY ("others_common_id") REFERENCES "others_common"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_social_id_social_id_fk" FOREIGN KEY ("social_id") REFERENCES "social"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_paragraph_id_paragraph_id_fk" FOREIGN KEY ("paragraph_id") REFERENCES "paragraph"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "others_common_items" ADD CONSTRAINT "others_common_items__parent_id_others_common_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "others_common"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "social_items" ADD CONSTRAINT "social_items__parent_id_social_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "social"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "collection_collection_ids" ADD CONSTRAINT "collection_collection_ids__parent_id_collection_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "collection"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_id_payload_preferences_id_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "branding_theme";
DROP TABLE "video";
DROP TABLE "home_page_items";
DROP TABLE "home_page";
DROP TABLE "home_page_rels";
DROP TABLE "announcement_bar";
DROP TABLE "others_common_items";
DROP TABLE "others_common";
DROP TABLE "users";
DROP TABLE "banner";
DROP TABLE "event_timer";
DROP TABLE "paragraph";
DROP TABLE "social_items";
DROP TABLE "social";
DROP TABLE "product";
DROP TABLE "collection_collection_ids";
DROP TABLE "collection";
DROP TABLE "session";
DROP TABLE "active_stores";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";`);

};
