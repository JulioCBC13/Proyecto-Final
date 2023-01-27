"""empty message

Revision ID: 541080d915ee
Revises: 3a96775e82eb
Create Date: 2023-01-27 22:29:26.753413

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '541080d915ee'
down_revision = '3a96775e82eb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('asesoria', schema=None) as batch_op:
        batch_op.add_column(sa.Column('time', sa.Time(), nullable=False))
        batch_op.drop_column('datetime')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('asesoria', schema=None) as batch_op:
        batch_op.add_column(sa.Column('datetime', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
        batch_op.drop_column('time')

    # ### end Alembic commands ###
