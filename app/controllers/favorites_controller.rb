class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]

  # GET /favorites
  def index
    @favorites = @current_user.favorites

    render json: @favorites, include: [ 'post', 'post.tag', 'post.user']
  end

  # GET /favorites/1
  def show
    render json: @favorite, include: [ 'post', 'post.tag', 'post.user']
  end

  # POST /favorites
  def create
    @favorite = @current_user.favorites.create!(favorite_params)
    render json: @favorite, status: :created, location: @favorite, include: [ 'post', 'post.tag', 'post.user']
    
    # @favorite = Favorite.new(favorite_params)
    # if @favorite.save
    #   render json: @favorite, status: :created, location: @favorite, include: [ 'post', 'post.tag', 'post.user']
    # else
    #   render json: @favorite.errors, status: :unprocessable_entity
    # end
  end

  # # PATCH/PUT /favorites/1
  # def update
  #   if @favorite.update(favorite_params)
  #     render json: @favorite
  #   else
  #     render json: @favorite.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = @current_user.favorites.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:post_id)
    end
end
